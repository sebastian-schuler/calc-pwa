import SimpleCalculator from 'components/SimpleCalculator';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { GlobalNavCategory, GlobalNavItem } from 'types/conversion-types';

type Props = {
  categories: GlobalNavCategory[];
}

const SimpleCalcRouter = ({ categories }: Props) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  let unit: GlobalNavItem | undefined;

  categories.some(category => {
    const res = category.children.find(unit => unit.slug === params.calculator);
    if (res) {
      unit = res;
      return true;
    }
  });

  if (!unit) {
    // If unit is not found, redirect to home page
    // TODO: Show error page
    return <Navigate to='/' replace />
  }

  // Check query params
  const unitQuery = searchParams.get("unit");

  // Set classes for body
  document.body.classList.add('overflow-hidden');

  return (
    <SimpleCalculator
      calcData={unit}
      unitQuery={unitQuery}
    />
  )
}

export default SimpleCalcRouter;