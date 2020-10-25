<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body>

<?php echo ssr(); ?>

<script>
    window.context = <?php echo json_encode(vue_context()); ?>
</script>

<?php wp_footer();?>

</body>

</html>