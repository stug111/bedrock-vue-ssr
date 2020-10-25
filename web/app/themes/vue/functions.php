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
