import type { IFavoriteCard } from '@appTypes/interfaces';
import { IconNavArrow } from '@assets/icons';
import { addFavoriteAsync, removeFavoriteAsync } from '@slices/favoriteSlice';
import type { AppDispatch, RootState } from '@store/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Card,
  CardBottom,
  CardImage,
  CardText,
  CardTitle,
  CardTop,
  IconStyled,
  Placeholder,
} from './FavoriteCard.styled';

function FavoriteCard({
  id,
  title,
  text,
  image,
  onClick,
}: IFavoriteCard & { onClick?: () => void }) {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorite.items);
  const isFavorite = favorites.some((f) => f.id === id);

  const [hasImageError, setHasImageError] = useState(false);

  const handleImageError = () => {
    setHasImageError(true);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavoriteAsync(id));
    } else {
      dispatch(
        addFavoriteAsync({
          id,
          name: title,
          description: text,
          photo: image,
          lat: 0,
          lon: 0,
        })
      );
    }
  };

  return (
    <Card onClick={onClick}>
      <CardTop>
        {image && !hasImageError ? (
          <CardImage
            src={image}
            alt={title}
            title={title}
            onError={handleImageError}
          />
        ) : (
          <Placeholder>Нет фото</Placeholder>
        )}
        <CardTitle>{title}</CardTitle>
      </CardTop>
      <CardText>{text}</CardText>
      <CardBottom>
        <IconStyled $active={isFavorite} onClick={handleFavoriteClick} />
        <IconNavArrow />
      </CardBottom>
    </Card>
  );
}

export default FavoriteCard;
