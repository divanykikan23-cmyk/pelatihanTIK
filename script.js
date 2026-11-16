//1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapuBotton');
//2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListerner('click', function() {
    //3. jalankan kode ini ketika toombol di-klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
