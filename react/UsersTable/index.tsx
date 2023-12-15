import React, { Component } from 'react'
import {
  Table
} from 'vtex.styleguide'
import { withRuntimeContext } from 'vtex.render-runtime'
import clients from '../clients/clients'

interface Props {
  runtime: any
}

class UsersTable extends Component<Props> {
  constructor(props: any) {
    super(props)
    this.state = {
      items: [
      ],
      tableDensity: 'low',
      searchValue: null,
      filterStatements: [],
    }
  }

  private getSchema() {

    return {
      properties: {
        id: {
          title: 'Identificador',
          width: 150
        },
        answer: {
          title: 'Pregunta',
          width: 300
        },
        answered: {
          title: 'Respuesta',
          width: 150
        },
        userId: {
          title: 'Id usuario',
        },
        createAt: {
          title: 'Fecha de creación',
        },
      },
    }
  }

  componentDidMount() {
    clients.getQuestions().then((result) => {
      this.setState({ items: result })
    }).catch((error) => {
      console.warn(error)
    })
    console.log('Component mounted!');
  }

  public render() {
    const {
      items,
      tableDensity,
    }: any = this.state

    return (
      <div>
        <Table
          fullWidth
          updateTableKey={tableDensity}
          items={items}
          schema={this.getSchema()}
          density="low"
        />
      </div>
    )
  }
}

export default withRuntimeContext(UsersTable)
