import { Subtitle } from 'components/atoms'
import { ListCard } from 'components/molecules'
import { ListRenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <Subtitle>
        Sua lista vazia, clique no botão "Adicionar" para incluir novos items.
      </Subtitle>
    )
  }

  return (
    <ListRenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListRenderContainer>
  )
}
