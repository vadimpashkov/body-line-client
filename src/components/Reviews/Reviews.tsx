import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { TitleH2, TitleH3 } from '../Titles';
import { Quote } from '../Quote';
import { Button } from '../Buttons';
import { SliderController } from '../SliderController';

import { useServer } from '../../hooks';
import { GetReviews, GetReviewsResponse } from '../../server';

import { device } from '../../styles/Variables';
import { responsive } from '../../styles/mixins';

import Plug from '../../assets/images/plug.jpg';

const ReviewsStyles = styled.section`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${responsive(36, 54)};

    @media ${device.md} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      gap: ${responsive(24, 36)};
    }
  }

  .content {
    display: grid;
    grid-template: 1fr auto / 1fr 1fr;
    row-gap: ${responsive(24, 36)};

    @media ${device.xs} {
      grid-template: initial;
      grid-template-columns: 1fr;
    }
  }

  .info {
    grid-column: 1 / 3;

    @media ${device.md} {
      grid-column: 1 / -1;
    }
  }

  .title {
    display: none;
    margin-bottom: ${responsive(36, 54)};

    @media ${device.md} {
      display: block;
    }
  }

  .name {
    margin-bottom: ${responsive(24, 36)};
    max-width: 200px;

    @media ${device.md} {
      max-width: initial;
      text-transform: none;
    }
  }

  .btn {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: end;

    @media ${device.md} {
      justify-self: start;
      grid-column-start: 1;
    }

    @media ${device.xs} {
      width: 100%;
    }
  }

  .controller {
    @media ${device.md} {
      justify-self: end;
    }

    @media ${device.xs} {
      grid-column: 1 / -1;
      grid-row-start: 3;
      justify-self: center;
    }
  }
`;

const Image = styled.img`
  max-height: 720px;
  min-height: 720px;

  @media ${device.ml} {
    max-height: 900px;
  }

  @media ${device.md} {
    grid-row-start: 2;
  }
`;

const Reviews: FC = () => {
  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState<GetReviewsResponse[]>([]);

  const getReviews = useServer(GetReviews);

  const loading = getReviews.state.fetching;
  const fetched = getReviews.isFetched;
  const success = !loading && getReviews.state.answer.success;

  useEffect(() => {
    if (success) {
      setReviews(getReviews.state.answer.data!);
      // console.log(getReviews.state.answer.data!);
    }

    getReviews.reload();
  }, [success, fetched]);

  useEffect(() => {
    getReviews.fetch(undefined);
  }, []);

  const clickHandler = (count: number) => {
    let quantity = index + count;

    if (quantity > reviews.length - 1) {
      quantity = 0;
    } else if (quantity < 0) {
      quantity = reviews.length - 1;
    }
    setIndex(quantity);
  };

  return (
    <ReviewsStyles>
      <Wrapper className="wrapper">
        <Image
          className="img"
          src={
            reviews![index]?.users.image
              ? process.env.REACT_APP_PROXY_ADDRESS + '/img/users/' + reviews![index]?.users.image
              : Plug
          }
          alt={`${reviews![index]?.users.firstname} ${reviews![index]?.users.lastname}`}
        />
        <div className="content">
          <div className="info">
            <TitleH2 className="title">Отзывы посетителей</TitleH2>
            <TitleH3 className="name">{`${reviews![index]?.users.firstname} ${
              reviews![index]?.users.lastname
            }`}</TitleH3>
            <Quote>{reviews![index]?.text || ''}</Quote>
          </div>
          <SliderController
            className="controller"
            total={reviews!.length}
            quantityNow={index + 1}
            onClickLeftArrow={() => clickHandler(-1)}
            onClickRightArrow={() => clickHandler(1)}
          />
          <Button className="btn">Все отзывы</Button>
        </div>
      </Wrapper>
    </ReviewsStyles>
  );
};

export default Reviews;
