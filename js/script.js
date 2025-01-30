let bmi = 0;


//mencegah form dikirim jika gender belum di klik
// mengirimkan notifikasi agar user menginput gender
document.getElementById('calc-form').addEventListener('submit', function(event) {
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Silakan pilih jenis kelamin.');
        event.preventDefault(); // Mencegah pengiriman form jika tidak ada yang dipilih
    } else {
        hitungBMI();
        event.preventDefault(); // Mencegah pengiriman form jika tidak ada yang dipilih
    }
});

//fungsi untuk menghitung bmi
function hitungBMI(){

    // document.getElementById('myForm').addEventListener('submit', function(event) {
    //     const gender = document.querySelector('input[name="gender"]:checked');
    //     if (!gender) {
    //         alert('Silakan pilih jenis kelamin.');
    //         event.preventDefault(); // Mencegah pengiriman form jika tidak ada yang dipilih
    //     }
    // });

    const bb = document.getElementById("input-bb").value;
    const tb = document.getElementById("input-tb").value;
    // console.log(gender);

    //tinggi badan dalam meter
    tbm = tb/100;
    bmi = (bb/(tbm ** 2)).toFixed(1);
    // console.log(bmi);
    showresult(bmi);
}

//Menunjukkan hasil setelah dilakukan perhitungan bmi
function showresult(bmi){

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const usia = document.getElementById("input-tt").value;

    let status = cekStatusBMI(bmi);

    const resultArea = document.getElementById("result");
    resultArea.innerHTML = `<div class="full-data">
                            <p>Anda merupakan seorang <span>${gender}</span> yang berusia <span>${usia} tahun</span></p>

                            <p>BMI anda saat ini adalah:</p>
                            <h1>${bmi}</h1>
                            <p>Anda <span>${status}</span></p>
                        </div>`;

    statusExplain(bmi);

}


//Fungsi untuk cek status dari nilai bmi yang didapatkan
// mengembalikan nilai status yang sesuai
function cekStatusBMI(bmi){
    let status;

    if (bmi < 18.5) {
        status = "kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 25 ){
        status = "normal (berat badan ideal)"
    } else if (bmi >= 25 && bmi < 30 ){
        status = "kelebihan berat badan"
    } else if (bmi >= 30 ){
        status = "kegemukan (Obesitas)"
    }

    return status;
}


//Fungsi untuk menampilkan text penjelsaan sesuai dengan nilai bmi nya
// pada ExplainArea
function statusExplain(bmi){

    const explainArea = document.getElementById("status-explain");

    if (bmi < 18.5) {
        explainArea.innerHTML = `<p>
                        Hasil BMI < 18.5
                        <br>Anda berada dalam kategori kekurangan berat badan.
                        <br>Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.
                    </p>

                    <div class="diseas">
                        <p>
                            Berat rendah dapat menyebabkan berbagai masalah penyakit
                            <br>Infertilitas
                            <br>Anemia
                            <br>Osteoporosis
                            <br>Sistem Imun Lemah
                        </p>
                    </div>`;
    } else if (bmi >= 18.5 && bmi < 25 ){
        explainArea.innerHTML = `<p>
                        Hasil BMI diantara 18.5 dan 24.9
                        <br>Anda berada dalam kategori berat badan yang normal.
                        <br>Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.
                    </p>`;
    } else if (bmi >= 25 && bmi < 30 ){
        explainArea.innerHTML = `<p>
                        Hasil BMI diantara 25 dan 29.9.
                        <br>Anda berada dalam kategori overweight atau berat badan berlebih.
                        <br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.
                        <br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.
                    </p>

                    <div class="diseas">
                        <p>
                            Beberapa penyakit yang berasal dari kegemukan
                            <br>Diabetes
                            <br>Hipertensi
                            <br>Sakit Jantung
                            <br>Osteoarthritis
                        </p>
                    </div>`;
    } else if (bmi >= 30 ){
        explainArea.innerHTML = `<p>
                        Hasil BMI lebih dari 30.
                        <br>Anda berada dalam kategori obesitas.
                        <br>Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.
                        <br>Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.
                    </p>

                    <div class="diseas">
                        <p>
                            Beberapa penyakit yang berasal dari kegemukan
                            <br>Diabetes
                            <br>Hipertensi
                            <br>Sakit Jantung
                            <br>Osteoarthritis
                        </p>
                    </div>`
    }

}

// Fungsi yang dijalankan saat reset di klik dan otomatis menghapus
// semua hasi dari result dan mengembalikannya seperti semula
function resetForm(){
    const resultArea = document.getElementById("result");
    resultArea.innerHTML = `<div class="none-data">
                            <h3>Harap isi data terlebih dahulu ya...</h3>
                            <p>Hasil akan tampil disini</p>
                        </div>`;

    const explainArea = document.getElementById("status-explain");
    explainArea.innerHTML = "";
}