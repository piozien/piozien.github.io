document.getElementById('sidebar-toggle').addEventListener('mouseover', function () {
    document.getElementById('sidebar').style.right = '0';
});

document.getElementById('sidebar').addEventListener('mouseleave', function () {
    document.getElementById('sidebar').style.right = '-250px';
});
