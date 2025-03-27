"use client";

import { Skeleton, Grid, Box } from "@mui/material";
import Image from "next/image";

export default function DeatailSkeleton() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-project-bg -z-20 -top-20" />
      <div
        className="max-w-7xl w-full relative mx-auto sm:p-8 p-6  rounded-3xl overflow-hidden"
        //   style={{ filter: "drop-shadow(0px 4px 40pxrgb(182, 182, 238))" }}    
      >
        <div className="h-[calc(100vh+80px)] w-full absolute -top-20 -z-10 xl:block hidden">
          <div className="h-full w-full relative">
            <Image
              alt="arch-with-rectangle"
              src="/assets/backgrounds/left-arch-rectangle.png"
              fill
              className="object-contain object-left-bottom"
              quality={100}
            />
          </div>
        </div>
        {/* half borders effects start*/}
        <div className="absolute inset-0 border-t-[3px] border-t-[#d6c641]"></div>
        <div className="absolute inset-0 project-detail-left-border"></div>
        <div className="absolute inset-0 project-detail-right-border"></div>
        <div className="absolute size-7 top-0 left-0 border-l-[3px] border-t-[3px] rounded-tl-3xl z-[1] border-l-[#d6c641] border-t-[#d6c641]" />
        <div className="absolute size-7 top-0 right-0 border-r-[3px] border-t-[3px] rounded-tr-3xl z-[1] border-r-[#d6c641] border-t-[#d6c641]" />
        {/* half borders effects end */}
        <Grid container spacing={4}>
          {/* Left Column Skeletons */}
          <Grid item xs={12} md={6}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={600}
              sx={{ bgcolor: "grey.900" }}
            />
            <Box mt={2}>
              <Skeleton
                variant="text"
                width="80%"
                height={40}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="text"
                width="60%"
                height={30}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="text"
                width="90%"
                height={30}
                sx={{ bgcolor: "grey.900" }}
              />
            </Box>
          </Grid>

          {/* Right Column Skeletons */}
          <Grid item xs={12} md={6}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ bgcolor: "grey.900" }}
            />
            <Box mt={2}>
              <Skeleton
                variant="text"
                width="70%"
                height={30}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="text"
                width="50%"
                height={30}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="text"
                width="90%"
                height={30}
                sx={{ bgcolor: "grey.900" }}
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
