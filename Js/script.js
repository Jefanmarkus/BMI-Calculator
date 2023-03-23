const btn = document.getElementById('hitungbmi');

btn.addEventListener('click', function(){

    let tinggi = document.querySelector('#tinggi').value;
    let berat = document.querySelector('#berat').value;

    if(tinggi == '' || berat == ''){
        alert('Mohon masukan data yang Valid');
        return;
    }

    // BMI = berat in KG / (tinggi di m * tinggi di m) 

    tinggi = tinggi / 100

    let BMI = (berat / (tinggi * tinggi));

    BMI = BMI.toFixed(2);

    document.querySelector('.total').innerHTML = BMI;

    let komen = '';

    if (BMI < 18.5) {
        komen = "Kekurangan Berat Badan";

    } else if (BMI >= 18.5 && BMI < 24.9) {
        komen = "Normal (Ideal)";

    } else if (BMI >= 24.9 && BMI < 30) { 
        komen = "Kelebihan Berat-Badan";

    } else if (BMI >= 30) {
        komen = "Kegemukan (Obesitas)";

    }
    document.querySelector(".komen").innerHTML = `Kamu termasuk kategori <span id="komen">${komen}</span>`;

     

    
})
  