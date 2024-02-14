import { faker } from "@faker-js/faker";

import { BasicStatus } from "../utils/enum";

/**
 * Organization data mock
 */
export const ORG_LIST = [
  {
    id: "1",
    name: "East China Branch",
    status: "enable",
    desc: faker.lorem.words(),
    order: 1,
    children: [
      {
        id: "1-1",
        name: "R&D Department",
        status: "disable",
        desc: "",
        order: 1,
      },
      {
        id: "1-2",
        name: "Marketing Department",
        status: "enable",
        desc: "",
        order: 2,
      },
      {
        id: "1-3",
        name: "Finance Department",
        status: "enable",
        desc: "",
        order: 3,
      },
    ],
  },
  {
    id: "2",
    name: "South China Branch",
    status: "enable",
    desc: faker.lorem.words(),
    order: 2,
    children: [
      {
        id: "2-1",
        name: "R&D Department",
        status: "disable",
        desc: "",
        order: 1,
      },
      {
        id: "2-2",
        name: "Marketing Department",
        status: "enable",
        desc: "",
        order: 2,
      },
      {
        id: "2-3",
        name: "Finance Department",
        status: "enable",
        desc: "",
        order: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Northwest Branch",
    status: "enable",
    desc: faker.lorem.words(),
    order: 3,
    children: [
      {
        id: "3-1",
        name: "R&D Department",
        status: "disable",
        desc: "",
        order: 1,
      },
      {
        id: "3-2",
        name: "Marketing Department",
        status: "enable",
        desc: "",
        order: 2,
      },
      {
        id: "3-3",
        name: "Finance Department",
        status: "enable",
        desc: "",
        order: 3,
      },
    ],
  },
];

/**
 * User permission mock
 */

/**
 * User role mock
 */
const ADMIN_ROLE = {
  id: "4281707933534332",
  name: "Admin",
  label: "admin",
  status: BasicStatus.ENABLE,
  order: 1,
  desc: "Super Admin",
};
const TEST_ROLE = {
  id: "9931665660771476",
  name: "Test",
  label: "test",
  status: BasicStatus.ENABLE,
  order: 2,
  desc: "test",
};
export const ROLE_LIST = [ADMIN_ROLE, TEST_ROLE];

/**
 * User data mock
 */
export const DEFAULT_USER = {
  id: faker.string.uuid(),
  username: "admin@gmail.com",
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  password: "demo1234",
  role: ADMIN_ROLE,
  permissions: ADMIN_ROLE.permission,
};
export const TEST_USER = {
  id: faker.string.uuid(),
  username: "test@gmail.com",
  password: "demo1234",
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  role: TEST_ROLE,
  permissions: TEST_ROLE.permission,
};
export const USER_LIST = [DEFAULT_USER, TEST_USER];
