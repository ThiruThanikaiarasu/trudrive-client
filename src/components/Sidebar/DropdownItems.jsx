import Button from '../../elements/Button'

const DropdownItem = ({ onClick, icon, title, children }) => (
    <li>
        <Button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-[#e7e8eb]" onClick={onClick}>
            {icon && 
                <span className="text-xl mr-4">
                    {icon}
                </span>
            }
            <p>{title}</p>
        </Button>

        {children && <div>{children}</div>}
    </li>
);

export default DropdownItem