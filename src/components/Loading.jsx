import * as React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
export default function Loading() {
    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
                <Button loading loadingIndicator="Loading…" variant="outlined">
                    Fetch data
                </Button>
            </Stack>
        </Stack>
    )
}
