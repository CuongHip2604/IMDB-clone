import { ReactNode } from 'react';
import { BreadcrumbContainer, BreadcrumbItem } from './styles';
import { Link } from 'react-router-dom';

export interface BreadcrumbItemProps {
  title: string | ReactNode;
  path?: string;
}

export interface IBreadcrumbProps {
  items: BreadcrumbItemProps[];
}

export default function Breadcrumb({ items }: IBreadcrumbProps) {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          {item.path ? <Link to={item.path}>{item.title}</Link> : item.title}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
}
