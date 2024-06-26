import Button from '../UI/Button'
import CircleColor from '../UI/CircleColor'
import Image from './Image'

import { TProduct } from '../types/TProduct'
import { textSlicer } from '../utils/TextSlicer'

type TProps = {
  product: TProduct
  setProductToEdit: (product: TProduct) => void
  openEditModal: () => void
  idx: number
  setProductToEditIdx: (value: number) => void
  openConfirmModal: () => void
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
  openConfirmModal
}: TProps) => {
  if (!product) {
    return 'null' // or return a loading spinner, or some fallback UI
  }

  const { title, description, price, colors, category } = product

  const renderColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ))

  const onEdit = () => {
    setProductToEdit(product)
    openEditModal()
    setProductToEditIdx(idx)
  }

  const onRemove = () => {
    setProductToEdit(product)
    openConfirmModal()
  }

  return (
    <div className="flex flex-col p-2 mx-auto text-lg text-center border-2 border-black rounded md:max-w-lg mx-w-sm">
      <Image
        src={product.imageURL}
        alt={product.title}
        className="w-full rounded-md h-52 lg:object-cover "
      />
      <h3 className="mt-5 font-bold border border-black rounded ">
        {textSlicer(title, 25)}
      </h3>

      <p>{textSlicer(description)}</p>

      <div className="flex flex-wrap items-center my-2 space-x-2 ">
        {renderColors}
      </div>

      <div className="flex items-center justify-between mt-auto ">
        <span className="text-lg font-semibold text-indigo-600 ">${price}</span>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold">{category.name}</span>
          <Image
            src={category.imageURL}
            alt={category.name}
            className="object-cover w-10 h-10 rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 space-x-2 ">
        <Button className="bg-indigo-600" width="w-full" onClick={onEdit}>
          EDIT
        </Button>
        <Button className="bg-red-600" width="w-full" onClick={onRemove}>
          DELETE
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
