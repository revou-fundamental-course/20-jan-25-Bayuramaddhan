let bmi = 0;

document.getElementById('calcForm').addEventListener('submit', function(event) {
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Silakan pilih jenis kelamin.');
        event.preventDefault(); // Mencegah pengiriman form jika tidak ada yang dipilih
    } else {
        hitungBMI();
    }
});

function hitungBMI(){
    // const gender = document.querySelector('input[name="gender"]:checked').value;

    // document.getElementById('myForm').addEventListener('submit', function(event) {
    //     const gender = document.querySelector('input[name="gender"]:checked');
    //     if (!gender) {
    //         alert('Silakan pilih jenis kelamin.');
    //         event.preventDefault(); // Mencegah pengiriman form jika tidak ada yang dipilih
    //     }
    // });

    const bb = document.getElementById("input-bb").value;
    const tb = document.getElementById("input-tb").value;
    const usia = document.getElementById("input-tt").value;
    // console.log(gender);

    //tinggi badan dalam meter
    tbm = tb/100;
    bmi = (bb/(tbm ** 2)).toFixed(1);
    console.log(bmi);
}