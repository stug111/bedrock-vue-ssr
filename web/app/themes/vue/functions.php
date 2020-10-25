<?php

use Spatie\Ssr\Engines\Node;
use Spatie\Ssr\Renderer;

add_action('wp_enqueue_scripts', 'vue_load_scripts');
add_action('after_setup_theme', 'vue_wordpress_setup');
add_action('wp_footer', 'browser_sync', 999);

function vue_load_scripts()
{
    wp_enqueue_script('vue-script', get_template_directory_uri() . '/dist/entry-client.js', array(), '0.0.1', true);
    wp_enqueue_style('vue-style', get_template_directory_uri() . '/dist/style.css', '0.0.1');
}

function browser_sync()
{
    if (preg_match('/(.*.local|.*.loc|localhost:.*)/i', $_SERVER['HTTP_HOST'])) {
        echo '<script id="__bs_script__">//<![CDATA[
						document.write("<script async src=\'http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.7\'><\/script>".replace("HOST", location.hostname));
					//]]></script>';
    }
}

function ssr()
{
    global $wp;

    $engine = new Node("node", __DIR__);
    $renderer = new Renderer($engine);
    $request = $wp->request;

    $context = [
        'url' => $request
     ];

    return $renderer
        ->entry(__DIR__ . '/dist/entry-server.js')
        ->context($context)
        ->fallback('<div id="app"></div>')
        ->render();
}

function vue_wordpress_setup()
{

    add_theme_support('title-tag');

    add_theme_support('post-thumbnails');

    add_theme_support('custom-logo', array(
        'height' => 160,
        'width' => 160,
    ));

    register_nav_menus(array(
        'main' => 'Main Menu',
    ));
}

new RADL('__VUE_WORDPRESS__', 'vue-script', array(
    'routing' => RADL::callback('vue_wordpress_routing'),
    'state' => array(
        'posts' => RADL::endpoint('posts'),
        'menus' => RADL::callback('vue_wordpress_menus')
    )
));

function vue_wordpress_routing()
{
    $routing = array(
        'category_base' => get_option('category_base'),
        'page_on_front' => null,
        'page_for_posts' => null,
        'permalink_structure' => get_option('permalink_structure'),
        'show_on_front' => get_option('show_on_front'),
        'tag_base' => get_option('tag_base'),
        'url' => get_bloginfo('url')
    );

    if ($routing['show_on_front'] === 'page') {
        $front_page_id = get_option('page_on_front');
        $posts_page_id = get_option('page_for_posts');

        if ($front_page_id) {
            $front_page = get_post($front_page_id);
            $routing['page_on_front'] = $front_page->post_name;
        }

        if ($posts_page_id) {
            $posts_page = get_post($posts_page_id);
            $routing['page_for_posts'] = $posts_page->post_name;
        }
    }

    return $routing;
}

function vue_wordpress_menus()
{
    $menus = array();
    // $locations is an array where ([NAME] = MENU_ID);
    $locations = get_nav_menu_locations();

    foreach (array_keys($locations) as $name) {
        $id = $locations[$name];
        $menu = array();
        $menu_items = wp_get_nav_menu_items($id);

        foreach ($menu_items as $i) {
            array_push($menu, array(
                'id'      => $i->ID,
                'parent'  => $i->menu_item_parent,
                'target'  => $i->target,
                'content' => $i->title,
                'title'   => $i->attr_title,
                'url'     => $i->url,
            ));
        }

        $menus[$name] = $menu;
    }

    return $menus;
}
