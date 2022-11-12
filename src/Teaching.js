
import image1 from './Veb1.jpeg';
import image2 from './Veb2.jpeg';
import image3 from './Veb3.jpeg';
import image4 from './Veb4.jpeg';
import image5 from './Veb5.jpeg';
import image7 from './Veb7.jpeg';
import image8 from './Veb8.jpeg';
import image9 from './Veb9.jpeg';
import image10 from './Veb10.jpeg';
import image6 from './Veb6.jpeg';




function Teaching (){
    return <div className="container">
        <h1>Вебинары</h1>
        <h2 className='pap'> Я разработала уроки как для начинающих, так и для практикующих кондитеров. Они доступны на постоянной основе.</h2>
        <p className='pap'>Научиться готовить macarons с нуля не слепо следуя рецептурам, а понимая процесс изнутри. Превратить любимое хобби в хороший заработок или попробовать себя в чем-то новом. А главное - открыть для себя, близких и клиентов мир волшебных вкусов. Это лишь часть того, что вы получите на моем курсе "Погружение в macarons". 6 недель насыщенных лекций, видео уроков, много рецептов, общение с единомышленниками, моя обратная связь и поддержка, приятные бонусы. Есть возможность приобрести отдельно доступ к первому уроку курса, который включает в себя лекцию, видео урок и текстовые материалы. Затем в течерие 5 дней можно будет доплатить остаток и идти до конца.А по объему информации, кстати, первый урок это даже больше, чем 1/8 курса.</p>
        <div className='product-card'>
    <img src={image7} className='product-card' width="300px" alt="lesson" />
    <img src={image2}  className='product-card'width="300px" alt="lesson" />
    <img src={image3} className='product-card' width="300px" alt="lesson" />
    <img src={image4} className='product-card' width="300px" alt="lesson" />
    <img src={image9} className='product-card' width="300px" alt="lesson" />
    <img src={image1} className='product-card' width="300px" alt="lesson" />
    <img src={image8} className='product-card' width="300px" alt="lesson" />
    <img src={image5} className='product-card' width="300px" alt="lesson" />
    <img src={image10}className='product-card' width="300px" alt="lesson" />
    <img src={image6}className='product-card' width="300px" alt="lesson" />
    </div>
    </div>
}
export default Teaching;