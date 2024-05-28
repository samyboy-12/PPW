function askPraktikan() {
    const name = prompt("Masukkan Nama Anda:");
    const nim = prompt("Masukkan NIM Anda:");
    const angkatan = prompt("Masukkan Angkatan Anda:");

    if (name && nim && angkatan) {
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>Data Praktikan PPW1</h2>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>Angkatan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${name}</td>
                        <td>${nim}</td>
                        <td>${angkatan}</td>
                    </tr>
                </tbody>
            </table>
        `;
    } else {
        alert('Semua data harus diisi!');
    }
}

function notPraktikan() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2 class="text-danger">Anda bukan praktikan PPW1, anda tidak boleh masuk!</h2>
    `;
}