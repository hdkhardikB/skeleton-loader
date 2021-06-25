import * as React from 'react';
import { SkeletonLoader } from '@components';
import {
  TileHeaderWrapper,
  TileWrapper,
  ItemWrapper,
  CardTittleWrapper,
  CardDetailSpan,
  CardCoverImage,
  CardTitle,
  CardAvatarWrapper,
  CardAvatar,
  CardDetailWrapper,
  CardImageWrapper,
} from './TileStyles';

export interface TileViewProps {
  /**
   * a path of an image to be shown as flag icon
   */
  flag?: string;
  /**
   * a string to be displayed as country title
   */
  title?: string;
  /**
   * a path of an image to be shown as cover image
   */
  coverImage?: string;
  /**
   * a number to be shown as population of country
   */
  population?: number;
  /**
   * to indicate if data is loading or not
   */
  isLoading: boolean;
}

export const TileView: React.FC<TileViewProps> = ({ isLoading, coverImage, population, title, flag }) => {
  return (
    <ItemWrapper>
      <TileWrapper>
        <TileHeaderWrapper>
          <CardAvatarWrapper>
            {(isLoading && <SkeletonLoader type="circle" height={40} width={40} />) || (
              <CardAvatar src={flag}></CardAvatar>
            )}
          </CardAvatarWrapper>
          <CardTittleWrapper>
            <CardTitle>{(isLoading && <SkeletonLoader />) || title}</CardTitle>
          </CardTittleWrapper>
        </TileHeaderWrapper>
        <CardImageWrapper>
          {(isLoading && <SkeletonLoader type="box" height={150} />) || (
            <CardCoverImage src={coverImage} width="100%" height="150px" />
          )}
        </CardImageWrapper>
        <CardDetailWrapper>
          {(isLoading && <SkeletonLoader type="line" width={120} />) || (
            <CardDetailSpan>{`Population: ${population}`}</CardDetailSpan>
          )}
        </CardDetailWrapper>
      </TileWrapper>
    </ItemWrapper>
  );
};

export default TileView;
