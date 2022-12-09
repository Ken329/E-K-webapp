import PropTypes from 'prop-types'
import { CheckIcon } from '@heroicons/react/24/outline'

import { updateTodo } from '../../../network/todo'

export default function List(props) {
  const onclick = async (id, checked) => {
    const data = await updateTodo({ id, checked: !checked })
    if (data.success) {
      props.updateFunc(data.data)
    } else {
      alert(data)
    }
  }
  return (
    <div class="bg-blue-100 shadow-inner rounded-md p-4 my-5 mx-2 flex items-center justify-between cursor-pointer md:mx-0" onClick={() => onclick(props.id, props.checked)}>
      <p>{props.children}</p>
      {
        props.checked
          ? <div class="w-auto"><CheckIcon class="w-6 h-6 text-green-400" /></div>
          : <></>
      }
    </div>
  )
}

List.defaultProps = {
  id: PropTypes.string,
  children: PropTypes.string,
  checked: PropTypes.string,
  updateFunc: PropTypes.func
}
