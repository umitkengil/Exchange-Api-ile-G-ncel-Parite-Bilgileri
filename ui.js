class UI
{
    constructor(ilkBirimOption,ikinciBirimOption)
    {
        this.ilkBirimOption=ilkBirimOption;
        this.ikinciBirimOption=ikinciBirimOption;

        this.ilkKur=document.querySelector("#ilkKur");
        this.ikinciKur=document.querySelector("#ikinciKur");
        this.sonuc=document.querySelector("#sonuc");
    }

    labelDonusecekBirim()
    {
        this.ilkKur.textContent=this.ilkBirimOption.options[this.ilkBirimOption.selectedIndex].textContent;
    }

    labelDonusturulecekBirim()
    {
        this.ikinciKur.textContent=this.ikinciBirimOption.options[this.ikinciBirimOption.selectedIndex].textContent;
    }

    labelYazdir(result)
    {
        this.sonuc.value=result;
    }
}