import { Button, } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function LoadingButton() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? 'Loading…' : 'Click to load'}
        </Button>
    );
}

// export default LoadingButton;