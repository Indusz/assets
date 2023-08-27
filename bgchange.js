<script>
    // Attach event listeners to all relevant links
    const links = document.querySelectorAll('.hover-text');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const imageUrl = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzI5NjdxMnRsNjN1bTI0Mm44em42cWV4c2VscGF0YjU1Y2Y4bTJkbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDarHj0ORdxfWtV6g/giphy.gif';

            setTimeout(function() {
                document.getElementById('body').style.backgroundImage = `url(${imageUrl})`;
                window.location.href = link.getAttribute('href'); // Manually open the link after the delay
            }, 4500); // 4.5 seconds in milliseconds
        });
    });
</script>
