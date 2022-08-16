import kannada from './images/kannada.jpg';


const About = () => {
    return (
        <div>

            <div className="description" style={{display:"flex"}}>
                <img src={kannada} alt="" style={{width:"50%", height:"50%"}} />
                <p style={{textAlign:"center"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis sunt, aspernatur harum maxime corporis autem dicta, ipsum placeat reiciendis assumenda aperiam quaerat ullam provident maiores architecto molestias exercitationem fuga?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit rerum, omnis est voluptatibus in autem mollitia aliquam quo, labore necessitatibus veritatis molestiae tempore eveniet nulla pariatur ex reprehenderit voluptas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores necessitatibus sed praesentium ad vel sint aspernatur sunt eum nisi tempora eius neque, repellendus id. Cum error nobis modi sapiente.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, debitis ratione! Vel modi laborum cum. Provident, atque officia pariatur velit temporibus asperiores sit reprehenderit exercitationem, explicabo cum illum vitae repudiandae!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quas praesentium aut amet quis dolore necessitatibus cumque libero sit! Libero unde earum facilis nam reiciendis voluptatum porro temporibus, accusantium corporis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos possimus deserunt totam ut. Nemo atque cupiditate, exercitationem facere assumenda ipsum nam vitae eveniet unde tempore iste consectetur omnis laboriosam.</p>
            </div>
            (welcome to about page by Router)
        </div>
      );
}
 
export default About;