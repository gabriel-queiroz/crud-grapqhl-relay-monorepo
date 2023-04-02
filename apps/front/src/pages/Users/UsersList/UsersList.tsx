import React from 'react'
import { Container, DataTable, Heading, TableColumnType } from '@monorepo/ui'

export const Userslist = () => {
  const columns: TableColumnType[] = [
    {
      label: 'Nome',
      index: 'name'
    },
    {
      label: 'Sobrenome',
      index: 'lastName'
    },
    {
      label: 'Cidade',
      index: 'city'
    }
  ]

  const datasource = [
    {
      id: '1',
      name: 'Gabriel',
      lastName: 'Queiroz',
      city: 'Recife'
    },
    {
      id: '2',
      name: 'Lucas',
      lastName: 'Santos',
      city: 'João pessoa'
    },
    {
      id: '3',
      name: 'maria ',
      lastName: 'silva',
      city: 'João pessoa'
    }
  ]

  return (
    <Container>
      <Heading
        title="Usuários"
        description="Esse são os usuários da plataforma, caso deseje você pode criar, editar ou excluir qualquer um"
      />
      <DataTable columns={columns} datasource={datasource} />
    </Container>
  )
}
