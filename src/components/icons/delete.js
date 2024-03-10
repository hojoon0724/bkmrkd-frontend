function DeleteBtn({ onDeleteClick }) {
  return (
    <div className="delete-button" onClick={onDeleteClick}>
      <svg className="trash-svg" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1111 2C9.37473 2 8.77778 2.59695 8.77778 3.33333C8.77778 3.70152 8.4793 4 8.11111 4L8 4L5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6L8 6H8.11111L15.8873 6C15.8878 6 15.8884 6 15.8889 6H16L19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4H15.8881C15.5203 3.99956 15.2222 3.70126 15.2222 3.33333C15.2222 2.59695 14.6253 2 13.8889 2H10.1111Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 8C5.72035 8 5.45348 8.1171 5.26412 8.32289C5.07477 8.52868 4.98023 8.80436 5.00346 9.08305L5.77422 18.3322C5.94698 20.4054 7.68005 22 9.7604 22H14.2396C16.32 22 18.053 20.4054 18.2258 18.3322L18.9965 9.08305C19.0198 8.80436 18.9252 8.52868 18.7359 8.32289C18.5465 8.1171 18.2797 8 18 8H6Z"
        />
      </svg>
    </div>
  );
}

export default DeleteBtn;
