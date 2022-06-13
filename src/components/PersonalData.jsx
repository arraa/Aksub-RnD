import pict from '../assets/pict.jpeg'

const PersonalData = () => {
    return(
        <>
        <div className="PerosnalData">
            <div>
                <h1>Personal data</h1>
            </div>
            <div className="PerosnalData">
                <div className="PerosnalData2">
                    <div><img src={pict} alt="" className='PerosnalData2__image' /></div>
                    <div>
                    <h3>Name</h3> 
                    <p>Mutiara Rahmah</p>
                    <h3>Nickname</h3> 
                    <p>Tia</p>
                    <h3>place, date of birth</h3> 
                    <p>Samarinda, 24 November 2003</p>
                    </div>
                </div>
                <div className='Perosnaldesc'>
                    <h2>
                        Hi !! I'm Mutiara Rahmah
                    </h2>
                    <p>
                        My name is Mutiara Rahmah, or commonly known as Tia. I am a computer science student at binus university and I am a BINUSIAN 25. I really like learning, seeking experience and always interested in trying new things. I work hard and can be responsible for what has been given to me. This year I enjoy learning about front-end such as html, css, javascript. I think it's very interesting and I love it. I hope to learn more about the front-end. I have a dream to be a front-end engineer in the future.
                    </p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default PersonalData;