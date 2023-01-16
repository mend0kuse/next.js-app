import cn from 'classnames';

import React, { FC, KeyboardEvent, useEffect, useMemo, useState } from 'react';

import Star from '../../../icons/star';
import styles from './star-rating.module.scss';

interface StarRatingProps {
	rating: number;
	setRating?: (rating: number) => void;
}

const StarRating: FC<StarRatingProps> = ({ rating, setRating }) => {
	const ratingArray = useMemo(() => new Array(5).fill(<></>), []);
	const [hoverStar, setHoverStar] = useState(rating);

	const onClickHandler = (rating: number) => {
		if (setRating) setRating(rating);
	};

	const handleSpace = (e: KeyboardEvent<HTMLSpanElement>, rating: number) => {
		if (setRating && e.code == 'Space') setRating(rating);
	};

	useEffect(() => {
		setHoverStar(rating);
	}, [rating]);

	return (
		<div className={styles.wrapper} onMouseLeave={() => setHoverStar(rating)}>
			{ratingArray.map((item: JSX.Element, index: number) => {
				return (
					<button
						key={index}
						className={cn({ [styles.pointer]: setRating })}
						onMouseEnter={() => setHoverStar(index + 1)}
						onClick={() => onClickHandler(index + 1)}
						tabIndex={setRating ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => handleSpace(e, index + 1)}
					>
						<Star fill={index < hoverStar} />
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
