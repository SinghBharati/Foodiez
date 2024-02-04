
// Reusable Section
import {useState} from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <div className="p-2 m-2  border-2 border-black rounded">
            <h2 className="text-3xl font-bold">{title}</h2>
            {/*Conditional Rendering*/}
            {isVisible ? <button
                    className="underline"
                    onClick={() => setIsVisible(false)}>Hide</button>:
                <button
                    className="underline"
                    onClick={() => setIsVisible(true)}>Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}
const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState("about")

    return (
        <>
            <h1 className="m-2 text-3xl font-bold">Instamart</h1>
            <Section title = {"About Instamart"}
                    description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. "}
                     isVisible={visibleSection === "about"}
                     setIsVisible={() => {
                         setVisibleSection(visibleSection === "about" ? "" : "about")

                     }}

            />

            <Section title = {"Team Instamart"}
                     description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. "}
                     isVisible={visibleSection === "team"}
                     setIsVisible={() => {
                         setVisibleSection(visibleSection === "team" ? "" : "team")
                     }}
            />

            <Section title = {"Careers Instamart"}
                     description = {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. "}
                     isVisible={visibleSection === "careers"}
                     setIsVisible={() => {
                         setVisibleSection(visibleSection === "careers" ? "" : "careers")
                     }}
            />
            {/*<AboutInstamart/>*/}
            {/*<DetailsOfInstamart/>*/}
            {/*<TeamsOfInstamart/>*/}
            {/*<CareersOfInstamart/>*/}
            {/*<Product/>*/}
        </>
    )
}

export default InstaMart;