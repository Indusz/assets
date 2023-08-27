<script>
    function delayAndChangeBackgroundAndContent(imageUrl) {
        setTimeout(function() {
            document.getElementById('body').style.backgroundImage = `url(${imageUrl})`;
        }, 4500);
    }
</script>
