class ParaBirimi
{
    constructor(ilkDeger,ikinciDeger)
    {
        this.ilkDeger=ilkDeger;
        this.ikinciDeger=ikinciDeger;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.miktar = null;
    }

    donustur()
    {
        return new Promise((resolve,reject)=>{
            fetch(this.url + this.ilkDeger)
            .then(response=>response.json())
            .then(data=>{
                const donusecekBirim = data.rates[this.ikinciDeger];
                let sonuc = donusecekBirim*Number(this.miktar);

                resolve(sonuc);
            })
            .catch(err=>reject(err));
        });
    }

    degisenmiktar(miktar)
    {
        this.miktar=miktar;
    }

    donusecekBirim(ilkDeger)
    {
        this.ilkDeger=ilkDeger;
    }

    donusturulecekBirim(ikinciDeger)
    {
        this.ikinciDeger=ikinciDeger;
    }
}