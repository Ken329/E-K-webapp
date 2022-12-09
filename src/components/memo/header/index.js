import {
  PencilIcon,
  TrashIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

import { deleteMemo } from '../../../network/memo'

const icons = [
  {
    name: 'edit',
    icon: PencilIcon,
  },
  {
    name: 'trash',
    icon: TrashIcon,
  }
]

export default function Header(props) {
  const onClick = async (event, name, id) => {
    event.preventDefault();

    if (name === 'edit') {
      props.edit(!props.editValue)
    } else {
      const data = await deleteMemo(id)
      if (data.success) {
        props.deleteFunc(data.data)
      } else {
        alert(data)
      }
    }

  }
  return (
    <div class="bg-white-500 flex items-center justify-between">
      <ClipboardDocumentIcon class="h-6 w-6 text-blue-300" />
      <div className="flex space-x-10">
        {
          icons.map((item) => {
            return <item.icon
              key={item.name}
              onClick={event => { onClick(event, item.name, props.id) }}
              class="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400" />
          })
        }
      </div>
    </div>
  )
}

Header.defaultProps = {
  id: PropTypes.string,
  edit: PropTypes.func,
  editValue: PropTypes.string,
  updateFunc: PropTypes.func,
  deleteFunc: PropTypes.func
}
