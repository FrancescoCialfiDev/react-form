


function Main({ cards }) {

    const newPosts = [...cards].map((element) => {
        return (
            element.published && (
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
            )
        )
    })




    return (

        <main>
            <div className="container">
                <div className="row align-items-center">
                    {newPosts}
                </div>
            </div>
        </main>

    )
}

export default Main;