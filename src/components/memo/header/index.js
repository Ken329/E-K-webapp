import {
  PencilIcon,
  TrashIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline'

const icons = [
  {
    name: 'edit',
    icon: TrashIcon,
  },
  {
    name: 'trash',
    icon: PencilIcon,
  }
]

export default function Header() {
  return (
    <div class="bg-white-500 flex items-center justify-between">
      <ClipboardDocumentIcon class="h-6 w-6 text-blue-300" />
      <div className="flex space-x-10">
        {
            icons.map((item) => {
                return <item.icon key={item.name} class="h-4 w-4 text-gray-300 cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"/>
            })
        }
      </div>
    </div>
  )
}
