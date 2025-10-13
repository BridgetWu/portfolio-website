import Cardex from './Cardex.jsx';

function Experience() {
    return (
        <>
        <div className="experience" id="experience">
            <h2 className="subheading">Experience</h2>
            <Cardex name="Data Analyst Intern at Univ. of Washington" date="June 2024 – August 2024" desc="Analyzed ChIP-seq datasets to identify protein-DNA binding sites and genomic regulatory elements. Performed quality control, read alignment, and peak calling to ensure accurate results. Collaborated with researchers to visualize results using IGV for interpretation and presentations. Processed over 4,000+ pieces of data."/>
            <Cardex name="Coding Angels Program at Microsoft" date="March 2023 – March 2023" desc="Selected to participate in a competitive, Microsoft-organized program designed to support women pursuing careers in science and
technology. Completed hands-on coding workshops and technical training in Azure and Github."/>
        </div>
        </>
    );
}

export default Experience;