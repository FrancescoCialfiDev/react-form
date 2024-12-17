import { useState } from "react"


function Main({ cards }) {

    const newPosts = [...cards].map((element) => {
        return (
            //  element.published && (
            <div className="col-xl-3 col-md-4 col-sm-6" key={element.id}>
                <div className="card">
                    <img src={element.image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.content}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            //)
        )
    })


    const [title, settitle] = useState("")

    function newTitle(event) {
        event.preventDefault()
        alert("Form Inviato")
        console.log(title);
    }


    return (

        < main className="d-flex" >
            <div className="formContainer">
                <form className="p-5 bg-white rounded-3 m-4" onSubmit={newTitle}>
                    <div className="form-group">
                        <label htmlFor="titleForm">Add a title for the card</label>
                        <input type="text" value={title} className="form-control" id="titleForm" placeholder="Es: React Components" onChange={(e) => {
                            settitle(e.target.value)
                        }} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {newPosts}
                </div>
            </div>
        </main >

    )
}

export default Main;