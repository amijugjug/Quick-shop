import { useState } from 'react';
import s from './Dropdown.module.css';
import Image from '../Image';

const Dropdown = ({
  options,
  onSelect,
  placeholder,
  placeholderImage,
  onDropDownClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    onDropDownClick();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const renderPlaceholder = () => {
    if (placeholderImage) {
      return <Image src={placeholderImage} width={48} height={48} />;
    } else if (placeholder) return <span>{placeholder}</span>;
    else selectedOption.label;
  };

  return (
    <div className={s.dropdown}>
      <button className={s.dropdownToggle} onClick={toggleDropdown}>
        {renderPlaceholder()}
      </button>
      {isOpen && (
        <ul className={s.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option.value}
              className={s.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
