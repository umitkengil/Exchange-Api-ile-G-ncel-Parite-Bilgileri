const miktar = document.querySelector("#miktar");
const donusecekKur = document.querySelector("#donusecekKur");
const donusturulecekKur = document.querySelector("#donusturulecekKur");

const paraBirimi = new ParaBirimi("USD","TRY");
const ui = new UI(donusecekKur,donusturulecekKur);

eventListener();

function eventListener()
{
    miktar.addEventListener("input",doviz_kuru);

    donusecekKur.onchange = function()
    {
        paraBirimi.donusecekBirim(donusecekKur.options[donusecekKur.selectedIndex].textContent);
        ui.labelDonusecekBirim();
    }

    donusturulecekKur.onchange = function()
    {
        paraBirimi.donusturulecekBirim(donusturulecekKur.options[donusturulecekKur.selectedIndex].textContent);
        ui.labelDonusturulecekBirim();
    }
    
}

function doviz_kuru()
{
    paraBirimi.degisenmiktar(miktar.value);

    paraBirimi.donustur()
            .then(result=>{
                ui.labelYazdir(result);
            })
            .catch(err=>console.log(err));
}