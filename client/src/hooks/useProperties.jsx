import React from "react";
import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

export const useProperties = () => {
  const { data, isLoading, isError, refresh } = useQuery(
    // queryKey: "allProperties"
    "allProperties",
    getAllProperties,
    { refreshOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refresh,
  };
};
