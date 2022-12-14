import './App.css';
import Carousel from './Carousel';
import image16 from './Me.jpeg';



function About (){
    return(
        <div>
        <div className="first">
        <img src={image16} width="300px" height="300px" alt="MyPhoto"/> 
        </div>
        <div className="second">
        <p>Почему я стала кондитером, а не химиком?</p>
        <p>Как ни странно, но даже сейчас иногда получаю вопросы, не жалко ли было отучиться 6 лет в университете, а потом еще 3 года потратить на аспирантуру совсем по другой специальности.</p>
        <p>Однозначно, нет. Я очень благодарна университету за знания, и не смотря на то, что работаю не по специальности, времени мне не жалко. Более того, химия не так далека от кондитерского дела, как кажется. Благодаря своей базе я спокойно могу читать литературу по пищевой химии и искать интересующие статьи. Просчитывать рецепты, понимая, как работает каждый ингридиент. И что-то сложное могу объяснить своим студентам простым яхыком.</p>
        <p>В аспирантуре же я приобрела ценные навыки искать информацию и структурировать, а также ставить эксперименты. Да и преподавать и обаться со студентами я начала тоже там.</p>
        <p>А десерты - это просто большая любовь ❤️ еще в институте я поняла, что приготовление и угощение людей доставляет огромное удовольствие. Так что все сложилось наилучшим образом.</p>
        </div>
        
       <div className='third'>
        <h4> Я сама разрабатываю и просчитываю рецепт каждой начинки. Все они из натуральных компонентов и произведены разными способами. Предлагаю вашему вниманию различные начинки.</h4>
        </div>
        <div className='mac'>
        {<Carousel />}
        </div>
        </div>
     ) 
}
export default About;