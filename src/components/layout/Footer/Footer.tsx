import {ICONS} from '@/constants/icons/icons';
import Image from 'next/image';


const Footer: React.FC = () => {

  
    return (
      <footer id="" className="">
        <div>BAZA TRAINEE UKRAINE</div>
        <div className="container">
            <div>
                <Image
                  src="/assets/images/Logo/Logo.png"
                  alt="prosthesis"
                  width={83}
                  height={83}
                  className=""
                />
                <div>
                    <div>
                        <ICONS.PHONE/>
                        <a href="tel:+380636286630">+380 63 628 66 30</a>
                    </div>
                    <div>
                        {/* <svg></svg> */}
                        <a href="tel:+380956621073">+380 95 662 10 73</a>
                    </div>
                    <div>
                        {/* <svg></svg> */}
                        <a href="mailto:cv@baza-skill.com.ua">cv@baza-skill.com.ua</a>
                    </div>
                    <div>
                        {/* <svg></svg> */}
                        <a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a>
                    </div>
                </div>
                <div>
                    <p>Команди</p>
                    <p>Досвід</p>
                    <p>Проєкти</p>
                    <p>Майбутнє</p>
                </div>
                <div>
                    {/* <Button></Button>
                    <Button></Button>
                    <Button></Button> */}
                </div>
            </div>
            <div>
                <p>Компанія направляє 10% прибутку на підтримку 59-тої бригади ім.Якова Гандзюка</p>
                <p>Baza Trainee Ukraine 2024 &copy; Усі права захищені</p>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;