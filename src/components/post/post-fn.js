import React, { useEffect, useState } from "react"

export function PostFnComponent() {

    const [items, setItems] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
     fetch("https://jsonplaceholder.typicode.com/posts")
        .then(x => x.json())
        .then(response => {
            setItems(response)
        }).catch(e => {
            console.log(e)
        })
    }
    const renderBody = () => {
        return (
            <React.Fragment>
                {items.sort((a, b) => a.id - b.id).map((item, i) => {
                    return (
                        <tr key={i}>
                            <th scope="row" >{item.id}</th>
                            <td>{item.title}</td>
                        </tr>
                    )
                })}
            </React.Fragment>
        )
    }


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Başlık</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}