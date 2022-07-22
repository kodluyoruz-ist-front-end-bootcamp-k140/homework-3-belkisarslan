import React from "react"


export class TodoClsComponent extends React.Component {

  state = {
    loading: false,
    items: [],
    todo: null
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({ loading: true })
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(x => x.json())
      .then(response => {
        this.setState({ items: response, loading: false })
    }).catch(e => {
      this.setState({ loading: false })
    })
  }

  renderBody = () => {
    return (
      <React.Fragment>
        {this.state.items.sort((a, b) => a.id - b.id).map((item, i) => {
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

 
    render(){
        return(
            <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Başlık</th>
                </tr>
              </thead>
              <tbody>
                {this.renderBody()}
              </tbody>
            </table>
        </>

        )
    }
}