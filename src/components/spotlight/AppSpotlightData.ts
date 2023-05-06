import { SpotlightAction } from "@mantine/spotlight";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GlobalNavCategory } from "types/conversion-types";

export const useActions = (categories: GlobalNavCategory[], close: () => void) => {

  const navigate = useNavigate();
  const { t } = useTranslation(['common', 'simple-converter']);

  const newActions: SpotlightAction[] = [];

  // Categories
  const unitCategories = categories.map((category) => category.children).flat();
  unitCategories.forEach((category) => {
    newActions.push({
      icon: category.icon,
      title: t(category.label),
      description: "",
      onTrigger: () => {
        navigate(`/${category.slug}`)
        close();
      },
    });
  });

  unitCategories.forEach((category) => {

    if (!category.getData) return;
    const data = category.getData();
    const units = data.sections.map((section) => section.items).flat();

    units.forEach((unit) => {

      // If unit has short, add it to keywords
      const keywords = unit.short ? [t(unit.short, { ns: 'simple-converter' })] : [];

      const label = t(unit.label, { ns: 'simple-converter' });
      const append = unit.append ? t(unit.append, { ns: 'simple-converter' }) : undefined;
      const categoryLabel = t(category.label, { ns: 'common' });

      newActions.push({
        title: label + (append ? ' ' + append : ''),
        description: categoryLabel,
        keywords: keywords,
        onTrigger: () => {
          navigate(`/${category.slug}?unit=${unit.id}`)
          close();
        },
      });
    });
  });

  return newActions;
}