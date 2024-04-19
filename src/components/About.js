import AboutProject from "../assets/images/about-project.png"

const About = () => (
    <div className="min-h-[595px] h-full w-full bg-primary flex">
        <div className="flex gap-[100px] justify-center items-center my-auto w-full">
            <div className="max-w-[556px] w-full h-[371px] bg-white rounded-[75px] rounded-es-[0px]">
                <img src={AboutProject} alt="about project" className="rounded-[75px] rounded-es-[0px] relative top-[10px] right-[10px] w-full h-full"/>
            </div>
            <div className="max-w-[450px] text-white">
                <h4 className="text-[32px] font-bold mb-6">About project</h4>
                <p className="mb-4">
                At YashilYaproq, our passion lies at the nexus of technology and nature. We're dedicated to harnessing artificial intelligence's potential to foster a greener, healthier world. Our mission is clear: revolutionize plant care and environmental stewardship.
                </p>
                <p>
                Our journey began with a devoted team of botanists, computer scientists, and AI enthusiasts united by a vision. We're driven by the understanding that healthy vegetation is vital for a sustainable planet. Through cutting-edge deep learning models, we've crafted a system that assesses plant health by analyzing their leaves. Our technology empowers gardeners, farmers, and plant lovers to identify issues early, nurturing robust and vibrant plant life. Join us on this transformative path to a greener future.
                </p>
            </div>

        </div>
    </div>
)

export default About