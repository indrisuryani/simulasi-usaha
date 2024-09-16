document.getElementById('gaya').addEventListener('input', function() {
    document.getElementById('gayaValue').textContent = this.value + ' N';
    updateUsaha();
});

document.getElementById('perpindahan').addEventListener('input', function() {
    document.getElementById('perpindahanValue').textContent = this.value + ' m';
    updateUsaha();
});

function updateUsaha() {
    var gaya = parseFloat(document.getElementById('gaya').value);
    var perpindahan = parseFloat(document.getElementById('perpindahan').value);
    var usaha = gaya * perpindahan;
    document.getElementById('usaha').textContent = usaha + ' J';
}
