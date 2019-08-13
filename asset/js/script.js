$(function () {

    $('#bTambahMhs').on('click', function () {
        $('#judulModal').html('Input Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#nim').val('');
        $('#email').val('');
        $('#jurusan').val('');
    });

    $('.editMhs').on('click', function () {
        $('#judulModal').html('Edit Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Update Data');
        $('.modal-body form').attr('action', 'http://localhost/mvc/public/mahasiswa/ubah');

        const id = $(this).data('id');
        $.ajax({
            url: 'http://localhost/mvc/public/mahasiswa/getubah',
            data: {
                id: id
            },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#id').val(data.id);
                $('#nama').val(data.nama);
                $('#nim').val(data.nim);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
            }
        });
    });
});