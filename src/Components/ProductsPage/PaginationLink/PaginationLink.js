import * as React from 'react';
import "./pagination.scss"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationLink() {
  return (
    <Stack spacing={4} className="pagination">
      <Pagination count={100} variant="outlined" shape="rounded" />
    </Stack>
  );
}
