import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "component/button/Button";
import { PageContent } from "component/layout/PageContent";
import { PageLayout } from "component/layout/PageLayout";
import { INDEX_PATH } from "constant/paths";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <PageContent>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-5">
            <FontAwesomeIcon icon="house-fire" size="4x" />
            <div className="mt-10 mb-5">
              <h1 className="text-4xl font-black capitalize">Not found</h1>
              <span>404: This page could not be found!</span>
            </div>
          </div>
          <Button
            icon="home"
            hoverIcon="arrow-right"
            onClick={() => navigate(INDEX_PATH)}
          >
            home
          </Button>
        </div>
      </PageContent>
    </PageLayout>
  );
};
