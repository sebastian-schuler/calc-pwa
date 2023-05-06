import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GlobalNavItem } from "types/conversion-types";

type Props = {
  item: GlobalNavItem
  fromUnit: string | null
}

const Shortcut = ({ item, fromUnit }: Props) => {

  const { t } = useTranslation(['common', 'simple-converter']);
  const navigate = useNavigate();

  const handleClick = () => {
    const unitQuery = fromUnit ? `?unit=${fromUnit}` : '';
    navigate(`/${item.slug}${unitQuery}`);
  }

  return (
    <button
      className="flex flex-col h-full items-center py-4 px-6 rounded-xl bg-dark-700 hover:bg-dark-600 cursor-pointer border-none"
      onClick={handleClick}
    >
      <div className="flex flex-col h-full text-white justify-center">
        <div className="text-5xl text-center">{item.icon}</div>
        <div className="text-lg text-center">{t(item.label)}</div>
      </div>
    </button>
  )
}

export default Shortcut