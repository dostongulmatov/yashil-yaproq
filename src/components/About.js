import AboutProject from "../assets/images/about-project.png"

const About = () => (
    <div className="min-h-[595px] h-full w-full bg-primary flex">
        <div className="flex gap-[100px] justify-center items-center my-auto w-full">
            <div className="max-w-[556px] w-full h-[371px] bg-white rounded-[75px] rounded-es-[0px]">
                <img src={AboutProject} alt="about project" className="rounded-[75px] rounded-es-[0px] relative top-[10px] right-[10px] w-full h-full"/>
            </div>
            <div className="max-w-[450px] text-white">
                <h4 className="text-[32px] font-bold mb-6">Loyiha haqida</h4>
                <p className="mb-4">
                “YashilYaproq”-da bizning ishtiyoqimiz texnologiya va tabiat o'rtasidagi bog'liqlikda yotadi. Biz sun'iy intellektning yashil va sog'lom dunyoni rivojlantirish uchun imkoniyatlaridan foydalanishga bag'ishlanganmiz. Bizning vazifamiz aniq: o'simliklarni parvarish qilish va atrof-muhitni muhofaza qilishda inqilob.
                </p>
                <p>
                Bizning sayohatimiz bir qarashda birlashgan botaniklar, kompyuter olimlari va AI ishqibozlaridan iborat sadoqatli jamoa bilan boshlandi. Bizni sog‘lom o‘simliklar barqaror sayyora uchun juda muhim ekanligini tushunamiz. Ilg‘or chuqur o‘rganish modellari orqali biz o‘simliklarning barglarini tahlil qilish orqali ularning sog‘lig‘ini baholovchi tizimni yaratdik. Bizning texnologiyamiz bog'bonlar, fermerlar va o'simliklarni sevuvchilarga muammolarni erta aniqlash, mustahkam va jonli o'simliklar hayotini rivojlantirish imkonini beradi. Yashil kelajak sari bu o'zgartiruvchi yo'lda bizga qo'shiling.
                </p>
            </div>

        </div>
    </div>
)

export default About